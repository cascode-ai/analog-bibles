$a_{cmc} \approx -396$（半边电路的精确节点解为 −394；简单估算 $-g_{m5h}r_{o3} = -400$ 同样可以接受）。

- 共模半边电路（half circuit）：将 $M_5$ 分成两半，每半的宽度和电流各为一半：$g_{m5h} = 2(50\ \mu\text{A})/0.1\ \text{V} = 1$ mA/V，$r_{o5h} = 2(10\ \text{V}/100\ \mu\text{A}) = 200$ kΩ。
- $M_{5h}$ 是一个共源级（common-source stage），其电流经共栅连接的 $M_1$ 流到输出节点：$a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3})$。
- $R_{o(\text{down})} = r_{o1}(1 + g_{m1}r_{o5h}) \approx (200\ \text{k})(1)(200\ \text{k})/1\ \text{k} = 40$ MΩ（$g_{m1} = 1$ mA/V，$r_{o1} = 200$ kΩ）；$r_{o3} = 400$ kΩ；$R_{o(\text{down})}\|r_{o3} \approx 396$ kΩ。
- $a_{cmc} = -(1\ \text{mA/V})(396\ \text{k}\Omega) \approx -396$。符号为负：抬高 $M_5$ 的栅压会增大尾电流，从而把两个输出都拉低。
