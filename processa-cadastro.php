<!-- feedback.php -->
<?php
// Recebe os dados do formulário de cadastro
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$idade = $_POST['idade'] ?? '';
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
</head>
<body>
    <h2>Obrigado pelo Cadastro, <?php echo htmlspecialchars($nome); ?>!</h2>
    <p>Por favor, preencha o formulário de feedback abaixo:</p>

    <form action="resposta_feedback.php" method="POST">
        <input type="hidden" name="nome" value="<?php echo htmlspecialchars($nome); ?>">
        <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">

        <label for="experiencia">Como foi sua experiência?</label><br>
        <textarea id="experiencia" name="experiencia" rows="4" cols="50" required></textarea><br><br>

        <label for="sugestoes">Sugestões:</label><br>
        <textarea id="sugestoes" name="sugestoes" rows="4" cols="50"></textarea><br><br>

        <input type="submit" value="Enviar Feedback">
    </form>
</body>
</html>
