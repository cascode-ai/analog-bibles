$L = 0.5\ \mu$m，$W \approx 23\ \mu$m（$W/L \approx 46.6$）；$C_{GS} \approx 39$ fF，$C_{GD} \approx 9.3$ fF，$C_{DB} \approx 19.7$ fF。
- 输出阻抗：$r_O = 1/(\lambda I_D) \ge 20$ kΩ，因此 $\lambda \le 0.1\ \mathrm{V^{-1}}$，从而 $L \ge 0.5\ \mu$m。取 $L = 0.5\ \mu$m（面积和电容最小）。
- 直到 $V_{DS} = 0.4$ V 都保持在饱和区（saturation region）：$V_{GS} - V_{TH} \le 0.4$ V。取 0.4 V（W 最小）：$W/L = 2I_D/[\mu_nC_{ox}(0.4)^2] = 1\ \mathrm{mA}/(134\ \mu \times 0.16) = 46.6$，因此 $W = 23.3\ \mu$m（若计入因子 $1 + \lambda V_{DS} = 1.04$，则为 22.4 µm）。
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = \tfrac23(23.3)(0.5)(3.84) + 23.3(0.4) = 29.8 + 9.3 = 39.1$ fF。
- $C_{GD} = WC_{ov} = 9.3$ fF。
- $C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} = 11.6 \times 3 \times 0.56 + 2(14.6)(0.0035) = 19.6 + 0.1 = 19.7$ fF。
