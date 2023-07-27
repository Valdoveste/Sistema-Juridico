let personRG: string = '';
let personCPF: string = '';
let personCNPJ: string = '';

export function onPersonRGChange() {
    personRG = personRG.replace(/\D/g, '');
    personRG = personRG.replace(/(\d{2})(\d)/, '$1.$2');
    personRG = personRG.replace(/(\d{3})(\d)/, '$1.$2');
    personRG = personRG.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function onPersonCPFChange() {
    personCPF = personCPF.replace(/\D/g, '');
    personCPF = personCPF.replace(/(\d{3})(\d)/, '$1.$2');
    personCPF = personCPF.replace(/(\d{3})(\d)/, '$1.$2');
    personCPF = personCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function onPersonCNPJChange(): void {
    personCNPJ = personCNPJ.replace(/\D/g, '');
    personCNPJ = personCNPJ.replace(/(\d{2})(\d)/, '$1.$2');
    personCNPJ = personCNPJ.replace(/(\d{3})(\d)/, '$1.$2');
    personCNPJ = personCNPJ.replace(/(\d{3})(\d)/, '$1/$2');
    personCNPJ = personCNPJ.replace(/(\d{4})(\d)/, '$1-$2');
}
