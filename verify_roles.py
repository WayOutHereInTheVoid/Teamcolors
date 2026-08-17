import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto('file:///app/index.html')

        # Wait for teams to render
        await page.wait_for_selector('text=Boston Food Mafia')

        # Click the team card to open modal
        await page.click('div.group:has-text("Boston Food Mafia")')

        # Wait for modal content
        await page.wait_for_selector('text=Crimson Red')

        # Look for role buttons
        buttons = await page.locator('button:has-text("Primary")').all()
        if len(buttons) > 0:
            print("Found Primary buttons!")
            await buttons[0].click()

        await page.wait_for_timeout(500)

        # Look for Secondary
        buttons2 = await page.locator('button:has-text("Secondary")').all()
        if len(buttons2) > 1:
            print("Found Secondary buttons!")
            await buttons2[1].click()

        await page.wait_for_timeout(500)

        # Screenshot the modal
        await page.screenshot(path='/home/jules/verification/roles_modal.png', full_page=True)

        # Close the modal
        await page.click('button:has-text("Reset") + button')
        await page.wait_for_timeout(500)

        # Screenshot the team cards
        await page.screenshot(path='/home/jules/verification/team_cards_with_roles.png', full_page=True)

        await browser.close()
        print("Success!")

asyncio.run(main())
