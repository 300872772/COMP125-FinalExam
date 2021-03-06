module objectsButton {
    export class ButtonAd extends createjs.Bitmap {
        /**
         * Creates an instance of Button.
         * 
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(pathString: string, x: number, y: number, isCentered: boolean) {
            super(pathString);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            
            this.x = x;
            this.y = y;
            

            this.on("mouseover", this._mouse_over, this);
            this.on("mouseout", this._mouse_out, this);
        }

        public getWidth(): number{
            var buttonWidth = this.image.width;

            return buttonWidth;
        }

        /**
         * This event handler triggers when the mouse is over the button
         * 
         * @private
         * @method _mouse_over
         * @return {void}
         */
        private _mouse_over(): void {
            this.alpha = 0.60; // 30% transparent

        
        }
        
        /**
         * This event handler triggers when the mouse leaves the button
         * 
         * @private
         * @method _mouse_out
         * @return {void}
         */
        private _mouse_out(): void {
            this.alpha = 0.99; // 100% solid
            
        }

    }
}