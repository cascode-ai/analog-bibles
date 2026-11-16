对每个固定的 $V_{DS}$，曲线都有两个转折点：$V_{GS} = V_{TH} = 0.7$ V 为导通点；$V_{GS} = V_{TH} + V_{DS}$ 为饱和区（saturation region）→ 线性区（triode region）的分界点。
- $V_{GS} < V_{TH}$：$I_D \approx 0$。
- $V_{TH} < V_{GS} < V_{TH} + V_{DS}$：饱和区，$I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}(V_{GS}-V_{TH})^2$，对所有 $V_{DS}$ 都是同一条抛物线；若计入沟道长度调制（channel-length modulation，CLM），则乘以 $1+\lambda V_{DS}$ 而略有抬高。
- $V_{GS} > V_{TH} + V_{DS}$：线性区，$I_D = \mu_nC_{ox}\frac{W}{L}[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$，它是关于 $V_{GS}$ 的直线，斜率为 $\mu_nC_{ox}(W/L)V_{DS}$。斜率在转折点处连续（直线与抛物线相切）。
- 曲线族：$V_{DS}$ 越大，抛物线段延伸得越远，线性区直线也越陡；$V_{DS}$ 很小时，曲线几乎是一条从 $V_{TH}$ 出发的直线（深线性区，$I_D \approx \mu_nC_{ox}(W/L)V_{DS}(V_{GS}-V_{TH})$）。例如，$V_{DS}$ = 0.2、0.5、1 V 时，第二个转折点分别位于 0.9、1.2、1.7 V。
