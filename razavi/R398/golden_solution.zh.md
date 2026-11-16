该环路是正反馈（positive feedback）：$M_2$ 是从 $V_{out}$ 到 N 的 NMOS 源极跟随器（source follower），$M_1$ 是从 N 到 $V_{out}$ 的 NMOS 共栅级，两者都是同相的，因此 N↑ → $V_{out}$↑ → N↑。在 λ = 0 且 $I_1$ 理想的条件下，环路增益（loop gain）为无穷大且为正，因此电路是再生的（regenerative）：其平衡点不稳定，因为 $V_{out}$ 处的任何电容都会产生一个右半平面极点（right-half-plane pole），电路会发生锁定（latch）。形式上的小信号结果为：$Z_{in} = 0$，$V_{out}/V_{in} = -1/(g_{m2}R_S)$，$Z_{out} = -\left(\dfrac{1}{g_{m1}} + \dfrac{1}{g_{m2}} + \dfrac{1}{g_{m1}g_{m2}R_S}\right)$（负电阻，这是正反馈的标志）。

- 输出节点只有 $M_1$ 的漏极流过小信号电流，对该节点应用基尔霍夫电流定律（KCL），形式上可得 $g_{m1}v_N = 0$，因此 $Z_{in} = 0$，且 $V_{in}/R_S + g_{m2}V_{out} = 0$。
- $Z_{out}$（$V_{in}$ = 0）：$v_N = g_{m2}v_X/(g_{m1} + g_{m2} + 1/R_S)$；$M_1$ 向输出端推入 $g_{m1}v_N$，因此 $I_X = -g_{m1}g_{m2}v_X/(g_{m1} + g_{m2} + 1/R_S)$。
- 动态特性：$C\,dv_{out}/dt = g_{m1}v_N = g_{m1}g_{m2}v_{out}/(g_{m1}+g_{m2}+1/R_S)$，输出电压呈指数增长。只有当输出端接有小于 $|Z_{out}|$ 的负载电阻时，电路才是稳定的。
