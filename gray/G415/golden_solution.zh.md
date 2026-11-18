$a_{cmc} \approx +66$（≈ $+g_{m5h}(r_{o6}\|r_{o7}) = +66.7$）。

- 半个 $M_5$：$g_{m5h} = g_{m5}/2 = (2 \times 200\ \mu\text{A}/0.2\ \text{V})/2 = 1$ mA/V，$r_{o5h} = 100$ kΩ。
- 在共模半边电路（half circuit）中，$g_{m5h}v_{cmc}$ 几乎全部（比例为 $r_{o5h}/(r_{o5h} + 1/g_{m1}) \approx 0.99$）经共栅接法的 $M_1$ 流入二极管连接的 $M_3$，并由 $M_8$ 以 1:1 复制到输出节点，该节点的电阻为 $r_{o8}\|r_{o9} = 66.7$ kΩ。
- 升高 $v_{cmc}$ 会增大镜像的 PMOS 电流并使输出升高：$a_{cmc} \approx +(1\ \text{mA/V})(66.7\ \text{k}\Omega) \approx +66$。
