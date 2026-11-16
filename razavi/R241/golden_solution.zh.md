$V_{out}$ 比 $V_F$ 约低 18.5 mV（$V_{out} - V_F \approx -g_{m4}(r_{O2}\|r_{O4})\times 1\ \mathrm{mV}$；若在 $r_O$ 和 $g_m$ 中保留 $(1+\lambda V_{DS})$ 因子，则 ≈ −24 mV）。

- 完全匹配时，由对称性 $V_{out} = V_F$。较大的 $|V_{TH4}|$ 使 $M_4$ 在相同 $V_{SG}$ 下的电流减小 $g_{m4}\times 1$ mV。
- 在输出端，这一电流差额必须由运算跨导放大器（OTA）的输出电阻（output resistance）$R_{out} \approx r_{O2}\|r_{O4}$ 吸收：$\Delta V_{out} = -g_{m4}(r_{O2}\|r_{O4})(1\ \mathrm{mV})$，而 $V_F$ 几乎不动。
- 每条支路流过 0.25 mA：$g_{m4} = \sqrt{2(38.4\ \mu)(100)(0.25\ \mathrm{m})} = 1.39$ mS；$r_{O2} = 40$ kΩ，$r_{O4} = 20$ kΩ，$r_{O2}\|r_{O4} = 13.3$ kΩ；$g_{m4}(r_{O2}\|r_{O4}) = 18.5$ → −18.5 mV。
- 采用 $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2(1+\lambda V_{DS})$ 的大信号（large-signal）求解给出 −24.5 mV（有效的 $r_O$ 和 $g_m$ 更大）。
