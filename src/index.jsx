export default function setStateAsync(options = {}) {
  return function(target) {
    target.isTestable = true;
    target.prototype.setStateAsync = function(partialState) {
      return new Promise(resolve => {
        this.setState(partialState, () => {
          resolve(this.state);
        });
      });
    };
  };
}