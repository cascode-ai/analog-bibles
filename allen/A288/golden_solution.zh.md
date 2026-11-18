$R_{s,C1} \approx 1/g_{mC1}$；$R_{s,C2} \approx r_{ds}$（与一个漏极电阻同数量级）。

- 约定：采用通常的观察法端口——单独驱动每个共源共栅管的源极，去掉 M1/M2，MC1/MC2 的栅极交流接地，忽略体效应，$g_mr_{ds} \gg 1$。
- 从漏极负载为 $R_D$ 的共源共栅器件源极看进去：$R_s = (r_{ds} + R_D)/(1 + g_mr_{ds})$。
- MC1：其漏极是 p 沟道共源共栅电流镜（cascode current mirror）的输入端（M3/M4 的栅极接 MC3 的漏极），表现得像一个二极管，$R_D \approx 1/g_{m3}$。所以 $R_{s,C1} = (r_{dsC1} + 1/g_{m3})/(1+g_{mC1}r_{dsC1}) \approx 1/g_{mC1}$。
- MC2：其漏极看到的是 p 沟道共源共栅 MC4/M4 的输出电阻，$R_D \approx g_{mC4}r_{dsC4}r_{ds4}$，所以 $R_{s,C2} \approx \dfrac{g_{mC4}r_{dsC4}r_{ds4}}{g_{mC2}r_{dsC2}} \approx r_{ds}$（等于 $r_{ds4}$ 乘以两本征增益之比）：这是一个高电阻，而不是 $1/g_m$。
