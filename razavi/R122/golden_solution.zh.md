$A_v = -\dfrac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)} = -\dfrac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}} \approx -\dfrac{g_{m1}}{g_{m3}}$。

- 共源级（common-source stage）$M_1$ 驱动节点 $A$ = $M_3$ 的漏极 = 跟随器 $M_2$ 的栅极；$M_2$ 的源极为输出端，其负载只有理想的 $I_1$；输出端驱动 PMOS $M_3$ 的栅极（在 $A$ 点周围形成负反馈）。
- 跟随器：$M_2$ 中的小信号电流为零 → $v_{out} = v_A\,g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$。
- 节点 $A$：$-g_{m3}v_{out} - v_A/r_{O3} = g_{m1}v_{in} + v_A/r_{O1}$；代入 $v_A = v_{out}(1 + 1/(g_{m2}r_{O2}))$ 即得上述结果。$M_1$ 看到的负载实质上是 $1/g_{m3}$：经跟随器闭合后，它就像一个二极管连接（diode-connected）的 PMOS。
