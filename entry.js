class Entry {
  constructor(name, value, compact = false) {
    this.name = name;
    this.value = value;
    this.compact = compact;
  }

  get minifiedString() {
    return this.name + ";" + this.value + ";" + this.compact;
  }
}