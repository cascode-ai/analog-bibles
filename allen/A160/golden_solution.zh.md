$\overline{v_{eq}^2} = \overline{v_{n1}^2} + \overline{v_{n2}^2} + \left(\dfrac{g_{m3}}{g_{m1}}\right)^2\left(\overline{v_{n3}^2} + \overline{v_{n4}^2}\right) + \left(\dfrac{g_{m6}}{g_{m1}}\right)^2\left(\overline{v_{n6}^2} + \overline{v_{n7}^2}\right) = 2\overline{v_{n1}^2} + 2\left(\dfrac{g_{m3}}{g_{m1}}\right)^2\overline{v_{n3}^2} + 2\left(\dfrac{g_{m6}}{g_{m1}}\right)^2\overline{v_{n6}^2}$

M5 没有贡献。

- 短路输出噪声电流：M1 和 M2 各贡献 $g_{m1}v_{n1}$（M1 经 M3–M4 电流镜，M2 直接贡献）。M3 的噪声电流流入其自身的二极管，决定 M3/M4 的栅极电压并被 M4 复制，贡献 $g_{m3}v_{n3}$。M4 直接贡献 $g_{m4}v_{n4}$。M6 的噪声电流进入 M1/M3 节点，流入低阻抗的二极管 M3，再被镜像到输出端，贡献 $g_{m6}v_{n6}$。M7 直接贡献 $g_{m7}v_{n7}$。
- M5 的噪声在 M1 和 M2 之间平均分配（共模）。两半以相反符号到达输出端并相互抵消。
- 将 $\overline{i_{to}^2}$ 除以 $g_{m1}^2$ 即得结果。在这些尺寸下，M3 和 M1 都是 50 µA 的 n 沟道管，因此 $g_{m3} = g_{m1}$，$\overline{v_{eq}^2} = 2\overline{v_{n1}^2} + 2\overline{v_{n3}^2} + 2(g_{m6}/g_{m1})^2\overline{v_{n6}^2}$，其中 $(g_{m6}/g_{m1})^2 = (K'_P \cdot 100\ \mu\mathrm{A})/(K'_N \cdot 50\ \mu\mathrm{A}) = 0.91$。若 $\overline{v_{n1}^2} = \overline{v_{n3}^2}$，则化为 $4\overline{v_{n1}^2} + 2(g_{m6}/g_{m1})^2\overline{v_{n6}^2}$。
