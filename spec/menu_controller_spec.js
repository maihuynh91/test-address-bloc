const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

    describe("#remindMe()", () => {
        beforeEach(() => {
            this.menu = new MenuController();
          });
 
        it("should return expected string", () => {
          expect(this.menu.remindMe()).toEqual("Learning is a life-long pursuit");
        });
  });

});