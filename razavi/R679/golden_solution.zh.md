$A_v = V_{out}/V_{in} = -g_{m1}/g_{m3} = -W_1/W_3$。增益只取决于宽度之比：$v_{sat}$、$C_{ox}$、L 和 $I_{SS}$ 都被消去了。
- $M_3$ 和 $M_4$ 是栅极和漏极都接 $V_{DD}$、源极接输出端的 NMOS 器件，即二极管连接（diode-connected）负载。在 λ = γ = 0 时，每个负载在其输出节点呈现 $1/g_{m3}$ 的阻抗。
- 差模半边电路（half circuit）：$M_1$ 驱动 $1/g_{m3}$ 的负载，因此对差分输入和差分输出有 $A_v = -g_{m1}/g_{m3}$。
- 速度饱和：每个器件都有 $g_m = WC_{ox}v_{sat}$（全部是 NMOS，$v_{sat}$ 相同），因此 $A_v = -\dfrac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\dfrac{W_1}{W_3}$。若饱和速度不同，结果将为 $-W_1v_{sat,1}/(W_3v_{sat,3})$。
- 作为比较，平方律（square law）给出 $-\sqrt{(W/L)_1/(W/L)_3}$。
