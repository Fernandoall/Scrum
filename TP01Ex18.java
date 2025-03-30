//18. Entrar via teclado com o valor de cinco produtos. Após as entradas, digitar um
//valor referente ao pagamento da somatória destes valores. Calcular e exibir o troco
//que deverá ser devolvido.
// Alisson Santos
// Fernando Gomes

import java.util.Scanner;

public class TP01Ex18 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] produtos = new double[5];
        double soma = 0;
        for (int i = 0; i < 5; i++) {
            System.out.println("Digite o valor do produto " + (i + 1) + ": ");
            produtos[i] = scanner.nextDouble();
            if (produtos[i] < 0) {
                System.out.println("Valor inválido. Digite novamente.");
                i--;
            }
            soma += produtos[i];
        }
        System.out.println("Digite o valor do pagamento: ");
        double pagamento = scanner.nextDouble();
        if (pagamento < soma) {
            System.out.println("Pagamento insuficiente.");
            scanner.close();
            return;
        }
        double troco = pagamento - soma;
        System.out.println("Troco: " + troco);
        scanner.close();
    }
}