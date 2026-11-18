$R_{out} \approx \dfrac{1}{g_{ds2} + g_{ds8}}$，$\dfrac{v_{out}}{v_{in}} \approx \dfrac{g_{m1} + g_{m2}}{2(g_{ds2} + g_{ds8})} = \dfrac{g_{m1}}{g_{ds2} + g_{ds8}}$（同相，$g_{m1} = g_{m2}$）。

- M7 为二极管连接，M8 镜像它的电流：这是电流镜负载。M2/M8 漏极处的输出端看到 $r_{ds2}\,\|\,r_{ds8}$。
- M1 的电流变化 $+g_{m1}v_{in}/2$ 流入 M7，并由 M8 镜像到输出端。M2 的电流减小 $g_{m2}v_{in}/2$，这同样使输出升高。总电流 $(g_{m1}+g_{m2})v_{in}/2 = g_{m1}v_{in}$ 流入 $R_{out}$。
