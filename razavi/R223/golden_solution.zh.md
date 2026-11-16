$V_{out1}/V_{in} = -g_{m1}r_{O1}$，$V_{out2}/V_{in} = 0$。
- $M_1$ 的漏极只与理想电流源 $I_1$ 相连，因此 $M_1$ 的小信号漏极电流必为零：$i_1 = 0$。
- 理想尾电流源（tail current source）迫使 $i_1 + i_2 = 0$，因此 $i_2 = 0$，$v_{out2} = -R_1i_2 = 0$。
- 对 $M_2$（栅极接交流地，漏极电压 $v_{out2} = 0$）：$i_2 = -(g_{m2} + g_{mb2})v_P - v_P/r_{O2} = 0$，因此 $v_P = 0$。
- 对 $M_1$：$i_1 = g_{m1}v_{in} - (g_{m1} + g_{mb1})v_P + (v_{out1} - v_P)/r_{O1} = g_{m1}v_{in} + v_{out1}/r_{O1} = 0$，得 $v_{out1} = -g_{m1}r_{O1}v_{in}$，即本征增益（intrinsic gain）。由于 P 点不动，体效应（body effect）不起作用。
