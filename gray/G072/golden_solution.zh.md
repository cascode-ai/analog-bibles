$$A_{dm} = -\frac{g_m\,(R_C \| \tfrac{R_L}{2})}{1 + g_m \tfrac{R_E}{2}\left(1 + \tfrac{1}{\beta_0}\right)} \approx -\frac{R_C \| (R_L/2)}{1/g_m + R_E/2},\qquad A_{cm} = 0,$$
$$R_{id} = 2\left[r_\pi + (\beta_0+1)\frac{R_E}{2}\right] = 2r_\pi + (\beta_0+1)R_E,\qquad R_{ic} \to \infty .$$

- 差模：电路对称且受反对称激励，因此 $R_L$ 和 $R_E$ 的中点保持为交流地。半边电路是负载为 $R_C \| (R_L/2)$、发射极负反馈（emitter degeneration）电阻为 $R_E/2$ 的共射级；$v_{od}/2 = A\,(v_{id}/2)$，因此 $A_{dm}$ 等于上述半边电路增益。半边电路的输入电阻为 $r_\pi + (\beta_0+1)R_E/2$，$R_{id}$ 是它的两倍。
- 共模：两侧同步变化，因此 $R_L$ 和 $R_E$ 中没有电流（可以视为开路）。于是每个发射极只看到理想电流源 $I_{EE}$（阻抗无穷大），因此发射极电流以及集电极电流都不能变化：$A_{cm} = 0$（CMRR → ∞），并且没有小信号基极电流流动：$R_{ic} \to \infty$（只有通过 $r_o$、$r_\mu$ 和电流源的输出电阻才为有限值，这些均已忽略）。
