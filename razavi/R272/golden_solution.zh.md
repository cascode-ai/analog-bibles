忽略沟道长度调制（channel-length modulation）时：$Z_{in} = -\dfrac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\dfrac{g_{m3}}{g_{m1}g_{m2}} - s\dfrac{C_1}{g_{m1}g_{m2}}$，即负电阻（negative resistance）$-g_{m3}/(g_{m1}g_{m2})$（若 $M_2$ 与 $M_3$ 相同，则 = $-1/g_{m1}$）与负电感 $L = -C_1/(g_{m1}g_{m2})$ 串联。

- 加在输入端的测试电压 $v_{in}$ 驱动 $M_1$ 的栅极；其电流 $g_{m1}v_{in}$ 取自节点 Y，而节点 Y 的负载是二极管连接（diode-connected）的 $M_3$ 和 $C_1$：$v_Y = -g_{m1}v_{in}/(g_{m3} + sC_1)$。
- $M_2$（栅极接 Y）向输入节点注入电流 $-g_{m2}v_Y$。由于 $I_1$ 是理想的，输入电流为 $i_{in} = g_{m2}v_Y = -\dfrac{g_{m1}g_{m2}}{g_{m3}+sC_1}v_{in}$：这是一个使导纳变为负值的正反馈环路。
- 计入 $r_O$ 时：$Z_{in} = r_{O2}\,\Big\|\,\Big[-\dfrac{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}{g_{m1}g_{m2}}\Big]$；电感项不变。
