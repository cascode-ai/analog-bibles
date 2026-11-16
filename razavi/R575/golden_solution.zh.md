$R_{on1} \approx 81.5$ Ω（在 0–20 mV 的输入范围内为 81.1–81.8 Ω）。相移 ≈ −2.9°（输出滞后，相当于 ≈ 81 ps 的延迟）；幅度只衰减 0.13%。

- 由于 $V_{in} \approx V_{out}$，器件处于深线性区（deep triode）：$R_{on1} = 1/[\mu_nC_{ox}(W/L)(V_{DD} - V_{in} - V_{TH})] = 1/[5.36\ \mathrm{mA/V^2} \times (3 - 0.01 - 0.7)\ \mathrm{V}] = 81.5$ Ω。
- $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$，其中 $\omega R_{on1}C_H = 2\pi(10^8)(81.5)(10^{-12}) = 0.0512$，所以 $\phi = -\arctan(0.0512) = -2.93°$。
