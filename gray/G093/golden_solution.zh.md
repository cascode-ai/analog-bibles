$R \approx 90$ kΩ（89.8 kΩ）；最小 $W/L = 10$。

- KVL：$V_{GS2} = V_{GS1} - I_{IN}R$。由于两器件相同且处于弱反型区，$I_{OUT} = I_{IN}\exp\!\left(-\dfrac{I_{IN}R}{nV_T}\right)$。
- $R = \dfrac{nV_T}{I_{IN}}\ln\dfrac{I_{IN}}{I_{OUT}} = \dfrac{1.5\times26\ \mathrm{mV}}{1\ \mu\mathrm{A}}\ln10 = 89.8$ kΩ。
- 弱反型要求 $V_{GS} - V_t = nV_T\ln[I_D/((W/L)I_t)] < 0$，即 $W/L > I_D/I_t$：$M_1$（1 µA）需要 $W/L > 10$，$M_2$（0.1 µA）需要 $W/L > 1$。由于两晶体管相同，$W/L \ge 10$。
