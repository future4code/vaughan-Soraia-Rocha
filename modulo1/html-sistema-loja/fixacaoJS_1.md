function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioMensal = 2000
    const comissaoPorCarro = (qtdeCarrosVendidos*100) + (valorTotalVendas * 0.05)   
    const salarioTotal= salarioMensal+comissaoPorCarro
    return SalarioTotal  
}
