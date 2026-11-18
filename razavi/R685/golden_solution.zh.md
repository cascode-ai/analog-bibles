小结：
- FF 和 SS：增益不变，电流随 $\mu C_{ox}$ 成比例变化，噪声功率按 $1/\mu C_{ox}$ 变化（FF 下较低，SS 下较高）。
- FS 和 SF：两个固定 $V_{GS}$ 的器件要求不同的电流。输出直流电平必须移动很大的幅度才能协调二者，可能把其中一个晶体管推出饱和区（saturation region），使增益崩溃。这种偏置方式在偏斜工艺角（skewed corner）下并不稳健。

FF 和 SS（两个 $\mu C_{ox}$ 的相对变化相等）：
- 两个电流按同一因子缩放，与相同的输出电压相容。
- $g_{m1} = \mu_nC_{ox}(W/L)_1V_{ov1} \propto \mu C_{ox}$，而 $r_{O1}$ 和 $r_{O2} = 1/(\lambda I) \propto 1/\mu C_{ox}$。
- 增益：$|A_v| = g_{m1}(r_{O1}\|r_{O2}) = \dfrac{\mu_nC_{ox}(W/L)_1V_{ov1}}{(\lambda_n+\lambda_p)I} = \dfrac{2}{(\lambda_n+\lambda_p)V_{ov1}}$，保持不变。
- 噪声：$\overline{v_{n,in}^2} = (4kT\gamma/g_{m1})(1 + g_{m2}/g_{m1})$，其中 $g_{m1}$ 和 $g_{m2}$ 都 ∝ $\mu C_{ox}$，因此噪声 ∝ $1/\mu C_{ox}$：FF 下较低，SS 下较高。功耗 ∝ $\mu C_{ox}$。

FS 和 SF：
- 在两个栅极电压都固定的情况下，$M_1$ 要求的电流为 $\tfrac12\mu_nC_{ox}(W/L)_1V_{ov1}^2$，$M_2$ 要求的电流为 $\tfrac12\mu_pC_{ox}(W/L)_2V_{ov2}^2$。只有 $V_{out}$ 能通过有限的输出电阻（output resistance）来协调二者。
- 以 $\mu C_{ox}$ 的相对变化 $\delta_n$、$\delta_p$ 进行线性化：$\Delta V_{out} \approx (\delta_p - \delta_n)/(\lambda_n + \lambda_p)$。对于 ±10% 的偏斜，取 $\lambda_n = 0.1$ V⁻¹、$\lambda_p = 0.2$ V⁻¹，该值 ≈ 0.67 V。
- FS 使 $V_{out}$ 降低，$M_1$ 趋向线性区（triode region）；SF 使其升高，$M_2$ 趋向线性区。在实际的电压余度（headroom）下，会有一个器件离开饱和区，增益急剧下降。该级若采用固定 $V_{GS}$ 偏置，就需要反馈（或电流型偏置）来确定输出电平。
- 如果两个器件确实都保持饱和，增益的变化只是一个与模型有关的二阶效应。若在共同的电流下取 $g_m = 2I_D/V_{ov}$ 和 $r_O = 1/(\lambda I_D)$，则 $|A_v| = 2/[(\lambda_n+\lambda_p)V_{ov1}]$ 在每个工艺角下都不变。若采用完整的 λ 模型（$I_D = I_{D0}(1 + \lambda V_{DS})$，因此 $g_m = 2I_D/V_{ov}$ 而 $g_{ds} = \lambda I_{D0}$，其中 $I_{D0} \propto \mu C_{ox}$ 是各器件不计 λ 时的饱和电流），则增益在 FS 下略有上升，在 SF 下略有下降：对于 ±10% 的偏斜，取 $\lambda_n = 0.1$、$\lambda_p = 0.2$ V⁻¹，约为 +5% 和 −6%（其他一阶处理方式给出的变化符号相同，幅度从百分之几到 ≈ 13%）。噪声只取决于公共电流：过驱动电压固定时两管都有 $g_m = 2I/V_{ov}$，因此 $g_{m2}/g_{m1} = V_{ov1}/V_{ov2}$ 不变，$\overline{v_{n,in}^2} \propto 1/I$。$I$ 稳定在两个 $\mu C_{ox}$ 变化按 $\lambda$ 加权的平均值上，所以噪声只略有变化：当 $\lambda_p > \lambda_n$ 时，FS 下略低、SF 下略高（本例中约 −2% 和 +4%），并且始终介于 FF 与 SS 的值之间。（若把 $g_{m1} \propto \mu_nC_{ox}$ 和 $g_{m2} \propto \mu_pC_{ox}$ 当作彼此独立，会得出 FS 噪声最低的结论，但两个串联器件流过同一个电流，所以在 FS 下 $g_{m2}$ 随 $g_{m1}$ 一起增大。）若有器件离开饱和区，增益崩溃，并且在 FS 下噪声反而升高。
