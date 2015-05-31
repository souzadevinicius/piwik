/*!
 * Piwik - free/libre analytics platform
 *
 * Tests that theming works.
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
describe("Theme", function () {
    this.timeout(0);

    before(function () {
        testEnvironment.pluginsToLoad = ['ExampleTheme'];
        testEnvironment.save();
    });

    it("should use the current theme", function (done) {
        expect.screenshot("home").to.be.capture(function (page) {
            page.load("");
        }, done);
    });

    it("should theme the UI demo page", function (done) {
        expect.screenshot("load").to.be.capture(function (page) {
            page.load("?module=Morpheus&action=demo");
        }, done);
    });
});
