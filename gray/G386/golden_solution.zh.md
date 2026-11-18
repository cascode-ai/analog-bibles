$a_{cmc} \approx -396$。

- 在共模半边电路（half circuit）中，$M_3$ 是由 $v_{cmc}$ 驱动的共源放大器，$g_{m3} = 2(50\ \mu\text{A})/0.1\ \text{V} = 1$ mA/V。
- 其负载为 $r_{o3}$ 与从 $M_1$ 漏极向下看进去的电阻并联，该管带有半边尾电阻 $r_{o5h} = 200$ kΩ 的源极负反馈（source degeneration）：$R_{o(\text{down})} \approx r_{o1}(1 + g_{m1}r_{o5h}) \approx 40$ MΩ（$r_{o1} = 200$ kΩ，$g_{m1} = 1$ mA/V）。与 $r_{o3} = 400$ kΩ 并联后约为 396 kΩ。
- $a_{cmc} = -g_{m3}(r_{o3}\|R_{o(\text{down})}) \approx -396$。抬高 PMOS 栅压会减小 $|I_{D3}|$、$|I_{D4}|$，使输出下降：增益为负。（它与以 $M_5$ 栅极作为 CMC 输入时的值相同，因为这里 $g_{m3} = g_{m5h} = 1$ mA/V。）
