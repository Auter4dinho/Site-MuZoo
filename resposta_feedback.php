<!-- resposta_feedback.php -->
<?php
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$experiencia = $_POST['experiencia'] ?? '';
$sugestoes = $_POST['sugestoes'] ?? '';
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Recebido</title>
</head>
<body>
    <h2>Obrigado pelo Feedback, <?php echo htmlspecialchars($nome); ?>!</h2>
    <p>Seu feedback foi recebido com sucesso.</p>

    <h3>Resumo do Feedback:</h3>
    <p><strong>Nome:</strong> <?php echo htmlspecialchars($nome); ?></p>
    <p><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></p>
    <p><strong>Experiência:</strong> <?php echo htmlspecialchars($experiencia); ?></p>
    <p><strong>Sugestões:</strong> <?php echo htmlspecialchars($sugestoes); ?></p>
</body>
</html>
