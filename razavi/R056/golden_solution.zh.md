## 参考答案

### 器件尺寸

$r_O=1/(\lambda I_D)\ge20\ \mathrm{k}\Omega$ 要求 $\lambda\le0.1\ \mathrm{V^{-1}}$。由 $\lambda\propto1/L$ 得最小沟道长度 $L=0.5\ \mu\mathrm{m}$。

取最小 $V_{DS}$ 下允许的最大过驱动电压 $V_{ov}=0.4\ \mathrm{V}$。平方律给出 $W/L=2I_D/(\mu_n C_{ox}V_{ov}^2)\approx46.64$，因此 $W\approx23.3\ \mu\mathrm{m}$。若按 $V_{DS}=0.4\ \mathrm{V}$ 计入 $1+\lambda V_{DS}=1.04$，则 $W\approx22.4\ \mu\mathrm{m}$。

### 电容

下列电容采用一阶近似得到的宽度。共用漏区尺寸为 $W/2$ 与 $E$。

- $C_{GS}=\tfrac23 WLC_{ox}+WC_{ov}\approx39.2\ \mathrm{fF}$。
- $C_{GD}=WC_{ov}\approx9.3\ \mathrm{fF}$。
- $C_{DB}=\tfrac W2 EC_j+2(\tfrac W2+E)C_{jsw}\approx19.7\ \mathrm{fF}$。

## 评分说明

- +2 — 用 $\lambda\propto1/L$ 和 $r_O$ 要求得到 $L=0.5\ \mu\mathrm{m}$，用最小 $V_{DS}$ 得到过驱动电压 $0.4\ \mathrm{V}$。$W$ 约为 22–23.5 μm，$C_{GS}$ 约为 37–40 fF，$C_{GD}$ 约为 9 fF，$C_{DB}$ 约为 19–20 fF。电容与所用 $W$ 一致，容差 ±5%。
- +1 — 明确说明额外设计裕量，例如采用更长的 $L$ 或更小的过驱动电压，且同时满足两项约束并一致地计算电容。只有一项电容出现小失误也给 +1。
- 0 — $W$ 与 $L$ 正确但电容大多错误，或反之。
- −2（明确作为结论）— 用错误约束求 $L$ 或 $W$，例如取过驱动电压为 $V_{DS}-V_{TH}$ 或写成 $r_O=\lambda/I_D$。用未折叠的漏区面积计算 $C_{DB}$ 且伴有其他错误，也记 −2。
