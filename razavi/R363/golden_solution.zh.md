噪声随 $R_S$ 增大而单调减小，因此 $R_S$ 应占用尽可能多的电压预算：$R_S \to V_H/I_D$，同时使 $M_2$ 的过驱动电压（overdrive voltage）在实际可行的范围内尽可能小（即采用很宽的 $M_2$）。在这一极限下，负载噪声电流趋于 $4kT/R_S = 4kTI_D/V_H$，而 $R_S = 0$ 时为 $4kT\gamma\cdot 2I_D/V_H$：两者之比为 $2\gamma$（γ = 2/3 时为 4/3）。

- 负载噪声电流（来自 $M_2$ 和 $R_S$）：$\overline{I_{n,L}^2} = \dfrac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1+g_{m2}R_S)^2}$；$M_1$ 的项 $4kT\gamma/g_{m1}$ 由 $I_D$ 和 $(W/L)_1$ 决定，是固定的。
- 令 $x = I_DR_S$，则 $|V_{ov2}| = V_H - x$，$g_{m2} = 2I_D/(V_H - x)$，$g_{m2}R_S = 2x/(V_H - x)$，$1 + g_{m2}R_S = (V_H + x)/(V_H - x)$。于是 $\overline{I_{n,L}^2} = 8kTI_D\,\dfrac{\gamma(V_H - x) + 2x}{(V_H + x)^2}$。
- $\dfrac{d}{dx}\left[\dfrac{\gamma V_H + (2-\gamma)x}{(V_H+x)^2}\right] \propto (2 - 3\gamma)V_H - (2-\gamma)x$，当 $\gamma \ge 2/3$ 时，它对所有 $x \ge 0$ 都 ≤ 0：不存在内部极小值；噪声随 $x$（即 $R_S$）的增大而持续下降。
- 物理原因：在直流压降和电流相同时，若 $2\gamma > 1$，电阻的噪声电流 $4kTI/V$ 低于饱和晶体管的噪声电流 $4kT\gamma\cdot2I/V_{ov}$。（当 γ < 2/3 时，驻点 $x = (2-3\gamma)V_H/(2-\gamma)$ 是噪声的极大值而不是极小值；最优点仍在端点上：γ > 1/2 时 $R_S \to V_H/I_D$，γ < 1/2 时 $R_S = 0$。）
