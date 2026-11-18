推导：
- $M_2$ 截止时 $I_{d2} = 0$，由 KCL 得 $V_o/R_L = -I_{d1} = \tfrac{k'}{2}\tfrac{W}{L}(V_{gs1} + V_t)^2$。
- $V_{gs1} + V_t = -V_{ov} + A(V_o - V_i + V_{OSP}) = A(V_o - V')$，其中 $V' \equiv V_i + V_{ov}/A - V_{OSP}$。
- 令 $u = V_o - V'$，$\beta = k'(W/L)$：$(u + V')/R_L = \tfrac{\beta}{2}A^2u^2$，即 $\tfrac{\beta A^2}{2}u^2 - \tfrac{u}{R_L} - \tfrac{V'}{R_L} = 0$。
- $u = \dfrac{1/R_L \pm \sqrt{1/R_L^2 + 2\beta A^2V'/R_L}}{\beta A^2}$。
- 根的选取：只有当 $V_{gs1} < V_{t1} = -V_t$，即 $A u < 0$ 时 $M_1$ 才导通，因此 $u < 0$，应取负号（取正号的根对应平方律的错误分支 $V_{gs1} + V_t > 0$）。
- 因此 $V_o = V' + \dfrac{1}{\beta A^2R_L} - \dfrac{1}{\beta A^2}\sqrt{\dfrac{1}{R_L^2} + \dfrac{2\beta A^2}{R_L}V'}$，即为所求结果。（当 $\beta A^2R_LV' \gg 1$ 时，输出趋近于 $V' - \sqrt{2V'/(\beta A^2R_L)}$：单位斜率，增益误差随电流增大而减小。）
