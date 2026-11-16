$I_{out} \approx I_{REF}\dfrac{1+\lambda(V_{GS1}-V_{GS4})}{1+\lambda V_{GS1}}$，即 $I_{out} - I_{REF} \approx -\dfrac{\lambda V_{GS4}}{1+\lambda V_{GS1}}I_{REF} \approx -\lambda V_{TH}I_{REF}$：λ = 0.1 V⁻¹ 时偏低约 6–7%。

- $V_{b1} = V_{GS0} + V_{GS1}$；$M_3$ 的栅极电压为 $V_{b1} - V_{GS4}$；$V_{DS2} = V_{b1} - V_{GS4} - V_{GS3}$。
- 由于 γ = 0，且各器件相同、电流（几乎）相同，$V_{GS3} = V_{GS0}$，因此 $V_{DS2} = V_{GS1} - V_{GS4}$。很宽的 $M_4$ 在小电流下有 $V_{GS4} \approx V_{TH}$，因此 $V_{DS2} \approx V_{GS1} - V_{TH}$——正好处于饱和区边缘，符合设计意图。
- $M_1$ 是二极管连接（diode-connected）器件，其 $V_{DS1} = V_{GS1}$。$V_{GS}$ 相同而 $V_{DS}$ 不同：$I_{out}/I_{REF} = (1+\lambda V_{DS2})/(1+\lambda V_{DS1})$；对于 $V_{GS1} \approx 0.9$ V，电流偏少 $\lambda V_{GS4}/(1+\lambda V_{GS1}) \approx 0.07/1.09 \approx 6.4\%$。
- 示例：$I_{REF}$ = 100 μA，$M_0$–$M_3$ = 20/0.5，$M_4$ = 200/0.5 且电流为 5 μA → $V_{DS2}$ = 0.186 V，$I_{out}$ = 93.6 μA（−6.4%）。
