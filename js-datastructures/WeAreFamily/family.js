// Todo
class Family {
    constructor() {
        this.family = [];
    }
    male(name) {
        if (!this.member(name)) {
            this.family.push({ name, parents: [], children: [], ismale: true });
            return true;
        } else {
            let counterPart;
            this.family.forEach(member => {
                if (member.parents.includes(name) && member.parents.length > 1) {
                    counterPart = member.parents.filter(elem => elem !== name)[0];
                }
            });
            const counterPrt = this.member(counterPart);
            let curr = this.member(name);
            if (!counterPrt["ismale"]) {
                curr.ismale = true;
                counterPrt.ismale = false;
                return true;
            } else {
                curr.ismale = false;
                return false;
            }
        }
    }
    female(name) {
        if (!this.member(name)) {
            this.family.push({ name, parents: [], children: [], ismale: false });
            return true;
        } else {
            let counterPart;
            this.family.forEach(member => {
                if (member.parents.includes(name) && member.parents.length > 1) {
                    counterPart = member.parents.filter(elem => elem !== name)[0];
                }
            });
            const counterPrt = this.member(counterPart);
            let curr = this.member(name);
            if (counterPrt["ismale"]) {
                curr.ismale = false;
                return true;
            } else {
                conterPrt.ismale = true;
                return false;
            }
        }
    }
    isMale(name) {
        if (!this.member(name)) {
            this.addNewFamilyMember(name);
            return false;
        } else {
            const curr = this.member(name);
            if (!curr.ismale) {
                return false;
            } else {
                return true;
            }
        }
    }
    isFemale(name) {
        if (!this.member(name)) {
            this.addNewFamilyMember(name);
            return false;
        } else {
            const curr = this.member(name);
            if (!curr.ismale) {
                return false;
            } else {
                return true;
            }
        }
    }
    setParentOf(childName, parentName) {
        if (!this.member(childName)) {
            this.addNewFamilyMember(childName);
        }
        if (!this.member(parentName)) {
            this.addNewFamilyMember(parentName);
        }

        let child = this.member(childName);
        let parent = this.member(parentName);

        if (parent.parents.includes(childName)) {
            return false;
        }

        if (child.parents.includes(parentName)) {
            return false;
        }

        child.parents.push(parentName);
        parent.children.push(childName);
        return true;
    }
    getChildrenOf(name) {
        if (!this.member(name)) {
            this.addNewFamilyMember(name);
        }
        return this.family.filter(elem => elem.name === name)[0].children.sort();
    }
    getParentsOf(name) {
        if (!this.member(name)) {
            this.addNewFamilyMember(name);
        }
        return this.family.filter(elem => elem.name === name)[0].parents.sort();
    }
    member(name) {
        return this.family.find(member => member.name === name);
    }
    addNewFamilyMember(newName) {
        this.family.push({ name: newName, parents: [], children: [] });
    }
}

const fam = new Family();
fam.setParentOf("Frank", "Morgan");
fam.setParentOf("Frank", "Dylan");
fam.male("Dylan");
// fam.setParentOf("Joy", "Frank");
// fam.male("Frank");
// fam.male("Morgan");