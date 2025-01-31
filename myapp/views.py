import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from mailjet_rest import Client

@csrf_exempt
def Sender(request):
    if request.method == "POST":
        try:
            # Parse o corpo da requisição JSON
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            telefone = data.get("telefone")
            msg = data.get("msg")

            # Configuração do Mailjet
            api_key = os.getenv("MAILJET_API_KEY")
            api_secret = os.getenv("MAILJET_API_SECRET")

            if not api_key or not api_secret:
                return JsonResponse({"error": "Configuração de e-mail ausente."}, status=500)

            mailjet = Client(auth=(api_key, api_secret), version="v3.1")

            # Dados para envio do e-mail
            email_data = {
                "Messages": [
                    {
                        "From": {
                            "Email": "fernando100@windowslive.com",  # Alterado para um e-mail válido
                            "Name": f"{name} (via Portfólio)"
                        },
                        "To": [
                            {
                                "Email": "fernando10092@gmail.com",
                                "Name": "Mensagem do Site - Fernando Portfólio"
                            }
                        ],
                        "Subject": "Nova mensagem do site!",
                        "TextPart": "Nova mensagem recebida do site.",
                        "HTMLPart": f"""
                            <h3>Nova mensagem recebida!</h3>
                            <p><b>Nome:</b> {name}</p>
                            <p><b>Email:</b> {email}</p>
                            <p><b>Telefone:</b> {telefone}</p>
                            <p><b>Mensagem:</b> {msg}</p>
                        """,
                    }
                ]
            }

            # Enviar o e-mail
            result = mailjet.send.create(data=email_data)

            if result.status_code == 200:
                response = JsonResponse({"message": "Mensagem enviada com sucesso!"}, status=200)
                response["X-Content-Type-Options"] = "nosniff"
                return response
            else:
                return JsonResponse({"error": f"Erro ao enviar e-mail: {result.text}"}, status=500)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Dados inválidos."}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método não permitido."}, status=405)
