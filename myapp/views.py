from decouple import config
from mailjet_rest import Client
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def Sender(request):
    if request.method == "POST":
        try:
            # Parse o corpo da requisição JSON
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            telefone = data.get('telefone')
            msg = data.get('msg')

            # Configuração do Mailjet - ADICIONE AS VARIÁVEIS DE AMBIENTE NO ARQUIVO .env
            api_key = config("MAILJET_API_KEY")
            api_secret = config("MAILJET_API_SECRET")
            mailjet = Client(auth=(api_key, api_secret), version='v3.1')

            # Dados para envio do e-mail
            email_data = {
                'Messages': [
                    {
                        "From": {
                            "Email": f"{email}",
                            "Name": f"{name}"
                        },
                        "To": [
                            {
                                "Email": "fernando10092@gmail.com",
                                "Name": "Mensagem do Site - Fernando Portifólio"
                            }
                        ],
                        "Subject": "Mensagem do Site - Portifólio",
                        "TextPart": "Agradecimentos",
                        "HTMLPart": f"<h3>{msg}</h3> <br/> <p>Telefone: {telefone}</p> <br/> <p>Email: {email}</p> <br/> <p>Nome: {name}</p>",
                    }
                ]
            }

            # Enviar o e-mail
            result = mailjet.send.create(data=email_data)
            if result.status_code == 200:
                return JsonResponse({"message": "Mensagem enviada com sucesso!"}, status=200)
            else:
                return JsonResponse({"error": "Erro ao enviar e-mail."}, status=500)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Dados inválidos."}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método não permitido."}, status=405)
