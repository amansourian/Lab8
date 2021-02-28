const main = require("../assets/scripts/main");

describe('volume icon', () => {
    test('is on 3', () => {
        expect(main(70)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test("is on 2", () => {
        expect(main(40)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test("is on 1", () => {
        expect(main(10)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test("is on 0", () => {
        expect(main(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});

