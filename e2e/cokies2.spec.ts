import { test, expect } from "@playwright/test";

test.describe("OVO Energy Cookie Overload and Size Test", () => {
  const MAX_COOKIE_SIZE = 8192; // 4KB is the maximum size of a cookie as per most browsers' limits.

  // Function to calculate the size of a cookie
  const calculateCookieSize = (cookie: any): number => {
    const cookieString = `${cookie.name}=${cookie.value}; Domain=${
      cookie.domain
    }; Path=${cookie.path || "/"}; ${
      cookie.expires
        ? `Expires=${new Date(cookie.expires * 1000).toUTCString()};`
        : ""
    } ${cookie.secure ? "Secure;" : ""} ${cookie.httpOnly ? "HttpOnly;" : ""}`;

    return new TextEncoder().encode(cookieString).length; // Calculates size in bytes
  };

  // Function to log each cookie's name and size
  const logCookieSizes = (cookies: any[]) => {
    cookies.forEach((cookie) => {
      const size = calculateCookieSize(cookie);
      console.log(`Cookie Name: "${cookie.name}" | Size: ${size} bytes`);
    });
  };

  // Function to check for overloaded cookies and their sizes
  const checkCookies = (cookies: any[]) => {
    const cookieCountMap: Record<string, number> = cookies.reduce(
      (acc, cookie) => {
        acc[cookie.name] = (acc[cookie.name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    // Check for overloaded cookies (cookies set multiple times)
    Object.entries(cookieCountMap).forEach(([name, count]) => {
      if (count > 1) {
        console.warn(`Cookie "${name}" is set multiple times (${count})`);
      }
    });

    // Log the size of each cookie
    logCookieSizes(cookies);
  };

  test.skip("should check for overloaded cookies and log cookie sizes", async ({
    page,
  }) => {
    // Visit the OVO Energy homepage
    await page.goto("https://www.ovoenergy.com/");
    await page.waitForTimeout(15000);
    await page.waitForLoadState("load");

    await page.goto("https://www.ovoenergy.com/home-energy-plans");
    await page.waitForTimeout(15000);
    await page.waitForLoadState("load");

    await page.goto("https://www.ovoenergy.com/beyond");
    await page.waitForTimeout(15000);
    await page.waitForLoadState("load");

    await page.goto("https://products.ovoenergy.com/our-energy/1-year-fixed");
    await page.waitForTimeout(15000);
    await page.waitForLoadState("load");

    await page.goto("https://www.ovoenergy.com/");
    await page.waitForLoadState("load");

    // Capture cookies after page load
    let cookies = await page.context().cookies();
    console.log("Cookies after page load:");
    checkCookies(cookies);

    // Interact with the page (e.g., scroll or click a button)
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(3000); // Wait for any new requests/cookies

    // Capture cookies after interaction
    let updatedCookies = await page.context().cookies();
    console.log("Cookies after interaction:");
    checkCookies(updatedCookies);

    // Optional: Assertion example to ensure no cookies exceed the size limit or are duplicated
    updatedCookies.forEach((cookie) => {
      const size = calculateCookieSize(cookie);
      expect(size).toBeLessThanOrEqual(MAX_COOKIE_SIZE);

      const duplicates = updatedCookies.filter((c) => c.name === cookie.name);
      expect(duplicates.length).toBeLessThanOrEqual(1);
    });
  });
});
