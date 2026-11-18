$\omega_r \approx 1.34 \times 10^9$ rad/s（$f_r \approx 213$ MHz）。

- 在运放输出端断开环路后，输出端的总负载为 $C_{L\text{eff}} = C_L + \dfrac{C_2(C_1 + C_{ia})}{C_2 + C_1 + C_{ia}} = 6 + \dfrac{4(6.58)}{10.58} = 8.49$ pF。
- $R_{dm}(\omega) = g_{m1}R_{odh}\cdot\dfrac{1}{1 + j\omega R_{odh}C_{L\text{eff}}}\cdot\dfrac{C_2}{C_2 + C_1 + C_{ia}}$。在极点频率以上，$|R_{dm}| \approx \dfrac{g_{m1}}{\omega C_{L\text{eff}}}\cdot 0.378$。
- $\omega_r \approx \dfrac{0.030}{8.49 \times 10^{-12}} \times 0.378 = 1.34 \times 10^9$ rad/s。
