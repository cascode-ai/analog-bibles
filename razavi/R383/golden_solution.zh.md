令 $R_0 = R_D\|r_O$：
$$S_{out}(f) = \frac{4kT\left[(\gamma g_m + 1/R_D)R_0^2 + R_P\right]}{1 + [2\pi f(R_0 + R_P)C_L]^2},\qquad \overline{V_{n,out,tot}^2} = \frac{kT}{C_L}\cdot\frac{(\gamma g_m + 1/R_D)R_0^2 + R_P}{R_0 + R_P}$$

- 在漏极处，$M_1$ 和 $R_D$ 的噪声电流流入 $R_0$，形成内阻为 $R_0$ 的戴维南（Thevenin）等效噪声电压 $4kT(\gamma g_m + 1/R_D)R_0^2$。$R_P$ 串联地加入 $4kTR_P$。总串联电阻 $R_0 + R_P$ 驱动 $C_L$：在 $1/[2\pi(R_0+R_P)C_L]$ 处形成单个极点。
- 积分：$\int_0^\infty \dfrac{df}{1 + (2\pi f\tau)^2} = \dfrac{1}{4\tau}$，其中 $\tau = (R_0 + R_P)C_L$。
- 检验：若 $M_1$ 无噪声且 $r_O \to \infty$（$R_0 = R_D$），结果为 $kT/C_L$；晶体管项 $\gamma g_mR_0^2/(R_0+R_P)$ 可使结果超过 $kT/C_L$。
