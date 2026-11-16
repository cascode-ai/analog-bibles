源极跟随器（source follower）特性：在 0.7 V 之前为零，之后以小于一的斜率上升；若 $R_D$ 足够大，$M_1$ 会进入线性区（triode region），$V_{out}$ 趋于平缓并逼近 $V_{DD}R_S/(R_S+R_D)$。

- $V_{in} \le 0.7$ V：$V_{out} = 0$。
- 饱和区（saturation region）：$V_{out} = I_DR_S$，$V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{2I_D/\beta}$；斜率为 $g_mR_S/[1 + (g_m+g_{mb})R_S]$，从 0 开始上升，当 $g_mR_S \gg 1$ 时趋于 ≈ $1/(1+\eta)$（≈ 0.8–0.85）。$R_D$ 不影响这一区域（λ = 0）。
- 当漏极电压 $V_{DD} - I_DR_D$ 降到 $V_{in} - V_{TH}(V_{out})$ 以下，即 $V_{DD} - (R_D/R_S)V_{out} < V_{in} - V_{TH}$ 时，$M_1$ 进入线性区。此后斜率减小，$V_{out}$ 趋于平缓并逼近 $V_{DD}R_S/(R_S+R_D)$（$M_1$ 相当于一个小电阻）。只有当 $R_D$（以及 β）足够大时，这一情况才会在 0–3 V 范围内出现；否则跟随器一直保持饱和，直到 $V_{in} = V_{DD}$。
- 转折点：0.7 V 处导通，按上述条件进入线性区，上限为 $V_{DD}R_S/(R_D+R_S)$。
