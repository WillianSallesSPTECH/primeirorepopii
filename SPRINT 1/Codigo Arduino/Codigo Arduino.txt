// Definição das constantes para os pinos dos sensores
const int PINO_SENSOR_TEMPERATURA = A1;  // Pino analógico A1 para o sensor de temperatura -- Analógico coleta com precisão variaveis, vai até a porta A5 - Arduino Uno
const int PINO_SENSOR_TCRT5000 = 7;      // Pino digital 7 para o sensor TCRT5000 -- 2 Estados Ligado (Hight) e Desligado (LOW) 0 ou 1

// Variável global para armazenar a temperatura em Celsius
float temperaturaCelsius;
const float LIMITE_TEMPERATURA = 40.0;

void setup() {
  // Inicializa a comunicação serial a 9600 bps para o monitor serial
  Serial.begin(9600);

  // Define o pino do sensor TCRT5000 como entrada (HIGH ou LOW Output)// e 0 e 1
  pinMode(PINO_SENSOR_TCRT5000, INPUT);
}

void loop() {
  // Lê o valor analógico do sensor de temperatura 
  int valorLeitura = analogRead(PINO_SENSOR_TEMPERATURA);

  // Converte a leitura analógica em temperatura em Celsius
  temperaturaCelsius = (valorLeitura * 5.0 / 1023.0) / 0.01;
   //if (temperaturaCelsius > LIMITE_TEMPERATURA) {
   // Serial.println("ALERTA: Temperatura acima do limite!");
  //}
  // Imprime a temperatura lida no monitor serial 
  //Serial.println(temperaturaCelsius);
  int estadoSensor = digitalRead(PINO_SENSOR_TCRT5000);
    Serial.print (" ");
    Serial.print("Bloqueio:");
  if (estadoSensor == LOW) {
    

    Serial.print(0);
  } else {
    
    Serial.print(1);
  }
  Serial.print(",");
  Serial.print("Temperatura:");
  Serial.println(temperaturaCelsius);

  Serial.print(",");
  Serial.print("Temperatura_minima:");
  Serial.println(10);

  Serial.print(",");
  Serial.print("Temperatura_maxima:");
  Serial.println(30);
  // Aguarda 2 segundos antes de fazer outra leitura
  delay(2000);


  // Lê o estado do sensor TCRT5000 (HIGH ou LOW)

  // Verifica o estado do sensor e imprime a mensagem correspondente
 

  // Aguarda 1 segundo antes de verificar o sensor novamente
  delay(1000);
}
