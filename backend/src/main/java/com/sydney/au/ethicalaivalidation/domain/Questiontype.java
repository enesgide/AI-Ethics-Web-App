package com.sydney.au.ethicalaivalidation.domain;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author: Xin Lin on 11/2/2020
 * @package: com.sydney.au.ethicalaivalidation.domain
 * @version: 1.0
 * <b>Description:</b>
 * <p></p>
 */
@Entity
public class Questiontype {
    private int id;
    private int type;
    private String description;

    public Questiontype() {
    }

    public Questiontype(int type, String description) {
        this.type = type;
        this.description = description;
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "type", nullable = false)
    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Questiontype that = (Questiontype) o;
        return id == that.id &&
                type == that.type && description == that.description;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type);
    }
}
