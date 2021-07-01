
var obj = {
    id: 676,
    getId() {
        return this.id
    },
    employee: {
        id: 6709,
        getId() {
            return this.id
        }
    }
}

console.log("Id dari employee adalah " + obj.employee.getId());