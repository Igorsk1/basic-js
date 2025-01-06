const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (typeof value === undefined) {
      this.chain.push("( )");
    } else if (typeof value === null) {
      this.chain.push("( null )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (
      !Number.isFinite(position) ||
      !Number.isInteger(position) ||
      position === 0 ||
      !this.chain[position]
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chain.join("~~");
    this.chain = [];
    return finishedChain;
  },
};

module.exports = {
  chainMaker,
};
