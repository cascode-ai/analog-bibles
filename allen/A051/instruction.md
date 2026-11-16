A simple MOS model describes the nonsaturation region by
$$i_D = K'\frac{W}{L}\left[(v_{GS}-V_T) - \frac{v_{DS}}{2}\right]v_{DS},\qquad 0 < v_{DS} \le v_{GS}-V_T$$
and the saturation region, including channel-length modulation, by
$$i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS}),\qquad 0 < v_{GS}-V_T \le v_{DS}.$$
These equations do not agree at the point of transition between the saturation and nonsaturation regions. For hand calculations this is not an issue, but for computer analysis it is. How would you change the saturation equation so that it would agree with the nonsaturation equation at $v_{DS} = v_{DS}(\text{sat}) = v_{GS} - V_T$?
