$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}$$

- 采用输出短路电流计算，因为 λ = 0 时输出电阻（output resistance）为无穷大。从输入端看的跨导（transconductance）为 $g_{m1}$。
- $M_2$ 的噪声（表示为折算到栅极的电压 $4kT\gamma/g_{m2}$）和 $R_S$ 的噪声 $4kTR_S$（与源极串联）都经带负反馈的跨导 $g_{m2}/(1 + g_{m2}R_S)$ 到达输出端，给出负载噪声电流 $\dfrac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1+g_{m2}R_S)^2}$。
- 除以 $g_{m1}^2$ 即得结果。当 $R_S = 0$ 时，它化为 $4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$；当 $g_{m2}R_S$ 很大时，负载项趋于 $4kT/(g_{m1}^2R_S)$（即电阻的噪声）。
