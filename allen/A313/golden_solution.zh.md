$$\frac{v_{out}}{v_{in}} = \frac{g_{m1}g_{m4}}{g_{m2}g_{m4} + (g_{m2} + g_{ds1} + g_{ds2})(g_{m3} + g_{ds3} + g_{ds4})} \approx \frac{g_{m1}g_{m4}}{g_{m2}(g_{m3}+g_{m4})}$$
这是一个正的（同相）增益；若 $g_{m3} = g_{m4}$，则 ≈ $g_{m1}/(2g_{m2})$。

模型：节点 X（M1 的漏极、M2 的源极、M4 的栅极）和输出节点。M2 是源极跟随器（source follower）（漏极接 $V_{DD}$，栅极接 $v_{out}$，源极接 X），以 M1 为负载；M4 是以二极管连接的 M3（$g_{m3} + g_{ds3}$）为负载的共源器件。
- 节点 X 的 KCL：$g_{m2}(v_{out} - v_x) - g_{ds2}v_x = g_{m1}v_{in} + g_{ds1}v_x$ → $v_x(g_{m2} + g_{ds1} + g_{ds2}) = g_{m2}v_{out} - g_{m1}v_{in}$。
- 输出节点的 KCL：$-(g_{m3} + g_{ds3})v_{out} = g_{m4}v_x + g_{ds4}v_{out}$ → $v_x = -(g_{m3}+g_{ds3}+g_{ds4})v_{out}/g_{m4}$。
- 消去 $v_x$ 即得结果。从物理上看，$v_{in}$ 升高会拉低 X，M4 导通减弱，$v_{out}$ 上升；M2 把 $v_{out}$ 反馈到 X（负反馈），这决定了较低的增益。由大信号关系（$I_1 = I_2$，$I_3 = I_4$）也可得到同样的结论。
