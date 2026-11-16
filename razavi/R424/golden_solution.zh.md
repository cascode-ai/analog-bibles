$W_{min} \approx 106\ \mu$m（$W/L \approx 213$）。

- $M_3$ 的漏极比 $V_{DD}$ 低两个二极管压降：$V_{D3} = V_{DD} - |V_{GS7}| - |V_{GS5}|$，其中 $|V_{GS5}| = |V_{GS7}|$（器件相同，电流均为 0.5 mA，γ = 0）。
- $M_3$ 饱和：$V_{D3} \ge V_b - V_{TH3} = 1.4 - 0.7 = 0.7$ V → $2|V_{GS5}| \le 2.3$ V → $|V_{GS5}| \le 1.15$ V → $|V_{OD5}| \le 0.35$ V。
- $0.5\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)(0.35)^2$ → $W/L \ge 212.6$ → 取 $L = 0.5\ \mu$m，得 $W \ge 106\ \mu$m。
