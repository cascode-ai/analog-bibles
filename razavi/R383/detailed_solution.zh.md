# 详细步骤 - R383

**思路。** 从漏极看进去，共源级相当于一个内阻为 $R_0 = R_D\parallel r_O$ 的噪声电压源。加上 $R_P$ 及其噪声，就构成驱动 $C_L$ 的串联 RC 网络，因此输出功率谱密度（PSD）等于总串联噪声电压乘以单极点低通响应，对其积分即得输出总噪声。

### 第 1 步 — 噪声源

把漏极节点记为 X。输入端接交流地时 $g_mv_{gs} = 0$，X 点到交流地之间接有 $R_D$（噪声电流 $\overline{I_{nD}^2} = 4kT/R_D$），到地之间还有**无噪声**的 $r_O$ 以及 $M_1$ 的沟道噪声 $\overline{I_{n1}^2} = 4kT\gamma g_m$。$R_P$ 从 X 接到输出端，其串联噪声为 $\overline{V_{nP}^2} = 4kTR_P$，$C_L$ 接在输出端与地之间。

### 第 2 步 — 漏极处的戴维南等效电路

断开 $R_P$ 后，两个噪声电流都流入

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O},$$

因此 X 点的开路噪声电压为

$$\overline{V_{n,Th}^2} = \left(\overline{I_{n1}^2} + \overline{I_{nD}^2}\right)R_0^2 = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 ,$$

其戴维南等效电阻为 $R_0$。

### 第 3 步 — 输出网络

从地到输出端依次为：$V_{n,Th}$、$R_0$，然后是 $R_P$ 及其串联噪声 $V_{nP}$，最后经 $C_L$ 回到地。

<!-- diagram: diagram-01.cir -->

同一回路中两个互不相关的噪声电压合并为一个噪声源，经 $R_0 + R_P$ 驱动 $C_L$：

$$\overline{V_{n,tot}^2} = 4kT\left[\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 + R_P\right],$$

$$\frac{V_{out}}{V_{n,tot}} = \frac{1/(sC_L)}{R_0 + R_P + 1/(sC_L)} = \frac{1}{1 + s(R_0 + R_P)C_L}.$$

令 $\tau = (R_0 + R_P)C_L$，单个极点位于 $f_p = 1/(2\pi\tau)$，由**总**电阻 $R_0 + R_P$ 决定。

### 第 4 步 — 输出噪声谱

$$S_{out}(f) = \frac{\overline{V_{n,tot}^2}}{1 + (2\pi f\tau)^2} = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2},$$

在 $f_p$ 以下平坦，高于该频率后按 $1/f^2$ 下降。

### 第 5 步 — 总积分噪声

令 $x = 2\pi f\tau$：

$$\int_0^\infty\frac{df}{1 + (2\pi f\tau)^2} = \frac{1}{2\pi\tau}\int_0^\infty\frac{dx}{1 + x^2} = \frac{1}{2\pi\tau}\cdot\frac{\pi}{2} = \frac{1}{4\tau},$$

因此

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df &= \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{4(R_0 + R_P)C_L}\\
&= \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.
\end{aligned}
$$

### 第 6 步 — 检验与解释

**纯电阻情况检验。** 若 $M_1$ 无噪声（$\gamma = 0$）且 $r_O \to \infty$（$R_0 = R_D$）：

$$\frac{(1/R_D)R_D^2 + R_P}{R_D + R_P} = \frac{R_D + R_P}{R_D + R_P} = 1 \;\Rightarrow\; \overline{V_{n,out,tot}^2} = \frac{kT}{C_L},$$

这正是电阻驱动电容时的经典结果。

**$r_O$ 的影响。** 若 $\gamma = 0$ 但 $r_O$ 为有限值，该因子为 $(R_0^2/R_D + R_P)/(R_0 + R_P) < 1$：$r_O$ 降低了电阻，却没有增加噪声。

**晶体管的影响。** $\gamma g_mR_0^2/(R_0 + R_P)$ 项可使总噪声远高于 $kT/C_L$，因为晶体管噪声按 $R_0^2$ 放大，而带宽由 $R_0 + R_P$ 决定。例如，取 $r_O = R_D$（$R_0 = R_D/2$）、$g_mR_0 = 10$、$R_P = R_0$、$\gamma = 2/3$，该因子为 $(6.67 + 0.5 + 1)R_0/(2R_0) \approx 4.1$，即总噪声约为 $4.1\,kT/C_L$。

### 结果

令 $R_0 = R_D\parallel r_O$：

$$S_{out}(f) = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2},$$

$$\overline{V_{n,out,tot}^2} = \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.$$

漏极相当于内阻为 $R_0$ 的噪声电压源 $4kT(\gamma g_m + 1/R_D)R_0^2$，$R_P$ 增加 $4kTR_P$，$R_0 + R_P$ 与 $C_L$ 决定单个极点。对于无噪声晶体管且 $r_O \to \infty$ 的情况，总噪声简化为 $kT/C_L$。

**常见错误。** 断言总噪声总是 $kT/C_L$。这只对处于热平衡的无源电阻成立；晶体管的噪声与决定带宽的电阻没有对应关系，无噪声的 $r_O$ 也会打破这种平衡。

**常见错误。** 把极点放在 $1/(2\pi R_PC_L)$ 或 $1/(2\pi R_0C_L)$。$C_L$ 经 $R_0 + R_P$ 充电，因此 $\tau = (R_0 + R_P)C_L$。

**常见错误。** 把 $r_O$ 当作具有噪声 $4kT/r_O$ 的电阻。晶体管的噪声已完全由 $4kT\gamma g_m$ 描述。
