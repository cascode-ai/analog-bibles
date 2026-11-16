$K_{VCO}$ 最多只能变化 $(1.5/1)^2 = 2.25$ 倍：$K_{VCO,max}/K_{VCO,min} \le 2.25$，即介于 $\omega_{LPF}/(9K_{PD})$（ζ = 1.5）与 $\omega_{LPF}/(4K_{PD})$（ζ = 1）之间。
- 相对于该范围的中值，这相当于 ±38%（$1.625K_{min} \pm 0.625K_{min}$）。
- 相对于 ζ = 1 时的值，$K_{VCO}$ 可下降 56%（降至 0.44×）；相对于 ζ = 1.5 时的值，它可上升 125%。

推导：
- 闭环传递函数为 $H(s) = \dfrac{K_{PD}K_{VCO}}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}}$。
- 因此 $\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}$，$\zeta = \tfrac12\sqrt{\omega_{LPF}/(K_{PD}K_{VCO})} \propto K_{VCO}^{-1/2}$。
- ζ = 1 时 $K_{PD}K_{VCO} = \omega_{LPF}/4$；ζ = 1.5 时 $K_{PD}K_{VCO} = \omega_{LPF}/9$。二者之比为 9/4 = 2.25。
