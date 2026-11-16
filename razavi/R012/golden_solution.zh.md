$M_1$ 是一个类似源极跟随器（source follower）的器件（漏极接 $V_{DD}$，源极接 $V_X$），只要导通就处于饱和区（saturation region）；$I_X$ 按二次函数规律、$g_m$ 近似按线性规律下降到零，并且比没有体效应（body effect）时更早截止。
- 分压器接在 $V_{DD}$ 与 $V_X$ 之间，因此 $V_{GS} = (3 - V_X)\dfrac{R_2}{R_1+R_2}$；$V_{SB} = V_X$，因此 $V_{TH} = 0.7 + 0.45(\sqrt{0.9+V_X} - \sqrt{0.9})$ 随 $V_X$ 升高。
- $V_{DS} = 3 - V_X \ge V_{GS}$，因此只要导通就处于饱和区：$I_X = \tfrac12\beta\left[(3 - V_X)\dfrac{R_2}{R_1+R_2} - V_{TH}(V_X)\right]^2$（假设 $3R_2/(R_1+R_2) > 0.7$ V）。
- 截止点满足 $(3 - V_X)R_2/(R_1+R_2) = V_{TH}(V_X)$，即低于不计体效应时的值 $3 - 0.7(R_1+R_2)/R_2$；高于该点时 $I_X = g_m = 0$。
- $g_m = \beta\left[(3 - V_X)\dfrac{R_2}{R_1+R_2} - V_{TH}(V_X)\right]$：以斜率大小 $\beta\,[R_2/(R_1+R_2) + dV_{TH}/dV_X]$ 下降到零（比仅由分压器决定的斜率更陡）。
