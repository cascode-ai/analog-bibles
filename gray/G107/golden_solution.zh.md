$|V_{OS}| \approx 6$ mV（所有项都线性化时 ≈ $0.233V_T$ = 6.1 mV；若 β 项保留为 $\ln(1+2/\beta_F)$，则为 5.85 mV；若每一项都保留为精确对数 $V_T\ln[1.05(1+1.95/15)/0.95]$，则为 5.78 mV，其中 $Q_4$ 的基极电流为 $I_{C4}/\beta_F$，$I_{C4} = 0.95I_{C3}$）。

- 输出位于 $V_{SUP} - |V_{BE}|$ 时，两个负载管的 $V_{CE}$ 相等，因此电流镜中的 KVL 给出 $I_{C4} = I_{C3}(I_{S4}/I_{S3})$，$Q_3$ 集电极处的 KCL 给出 $I_{C1} = I_{C3}(1 + 2/\beta_F)$；$I_{C2} = I_{C4}$。
- $V_{OS} = V_{BE1} - V_{BE2} = V_T\ln\left(\dfrac{I_{C1}I_{S2}}{I_{C2}I_{S1}}\right) = V_T\ln\left[\dfrac{I_{S3}}{I_{S4}}\dfrac{I_{S2}}{I_{S1}}\left(1 + \dfrac{2}{\beta_F}\right)\right] \approx V_T\left(\dfrac{\Delta I_{SP}}{I_{SP}} - \dfrac{\Delta I_{SN}}{I_{SN}} + \dfrac{2}{\beta_F}\right)$。
- 最坏情况（随机失配项按幅度相加，系统性的 β 项始终存在）：$V_T(0.05 + 0.05 + 2/15) = 26\ \mathrm{mV}\times0.233 \approx 6.1$ mV。
